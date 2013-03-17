<?php

// Starts adresvseti framework


// PHP settings

// setting include path
set_include_path(get_include_path(). PATH_SEPARATOR . realpath(getcwd())); 

// setting unserialize_callback function
ini_set('unserialize_callback_func', 'unserializeCallback');

// registering autoload function
spl_autoload_register("adresvseti_autoload");


// configuring sessions
ini_set('session.use_only_cookies', true); // enabling session id management only by cookies
ini_set('session.use_trans_sid', false); // disabling support of HTTP based session id
//ini_set('session.cookie_lifetime', 1800); // 30 minutes
//ini_set('session.auto_start', true); // autostarts session
//session_name('ASID');
session_start();


// configuring memory allocating

// setting memory limit
//ini_set('memory_limit', '128M');

// setting maximum upload file size
ini_set('upload_max_filesize', '100M');

// setting maximum post message
ini_set('post_max_size', '100M');



// configuring error reporting

// turning off all error reporting
ini_set('display_errors', E_ALL);

// setting time limit
//set_time_limit(300);



// coniguring time settings

// setting timezone

// Tomsk
date_default_timezone_set('Asia/Novosibirsk');

// Krasnoyarsk
//date_default_timezone_set('Asia/Bangkok');



// Processing request

$excepion = null;

try
{
	// starting an application
	adresvseti_framework_Controller_FrontController::instance()->run();
}
catch (adresvseti_components_Access_AccessControl_RBAC_Exceptions_RbacException $e)
{
    // redirecting to login page
    header('Location: /rcg/authorization/login/');
    //showException("Access Control", $e);
}
catch (adresvseti_components_Exceptions_ComponentException $e)
{	
    showException("Component's", $e);	
}
catch (adresvseti_framework_Data_Mapper_Exceptions_MapperException $e)
{
    showException("Mapper", $e);   
}
catch (adresvseti_framework_Exceptions_SystemExceptions_SystemException $e)
{
    showException("System", $e);
}
catch (adresvseti_framework_Exceptions_InternalException $e)
{
    showException("Internal", $e);
}
catch (adresvseti_framework_Exceptions_ExternalExceptions_ExternalException $e)
{
    showException("External", $e);
}
catch (PDOException $e)
{
    showException('PDO', $e);
}
catch (Exception $e)
{
    showException('Unexpected', $e);
}


// Functions

// exeption handler
function showException($exceptionType, Exception $e)
{
    header("HTTP/1.0 500");
    
    echo "<font color=red><b>{$exceptionType} Exception with message:</b></font> {$e->__toString()}";
    file_put_contents('_data/exceptions.txt', "
    
    " . date("Y-m-d H:i:s") . '. ' . $e->__toString() . "\n", FILE_APPEND);
}

// autoloads necessary classes
function adresvseti_autoload($className) 
{
	$path = str_replace('_', '/', $className) . '.php';
	if (!file_exists($path))
	{
	    return;
	}
	
	require_once($path);
}

// searhes for domain object definition when unserializing
function unserializeCallback($className, $currentPath = null)
{
	if (is_null($currentPath))
	{
		// it's a first call
	
	    // retrieving current working directory path
	    $currentPath = getcwd();
		
	    $unserialize_dir = $currentPath . '/_data/unserialize';
	    
		// checking whether result has already been cached in global registry
		//$MDManager = adresvseti_framework_MetaData_MDManagerFactory::instance()->getManager('');
		//$filePath = $MDManager->Registry->getValue('unserializeCallback.' . $className);
		
		$path = $unserialize_dir . '/' . $className . '.php';
		$path = str_replace('\\', '/', $path);
		if (!is_null($path) && file_exists($path))
		{
		    $filePath = file_get_contents($path);
		    
			// including file
			require_once($filePath);
			
			// checking whether file contains required class
			if (class_exists($className))
			{
				return true;
			}
		}
	}
	
	
	$unserialize_dir = getcwd() . '/_data/unserialize';
	
	$expectedFileNameSuffix = substr($className, strrpos($className, '_') + 1) . '.php';
	
	// reading directory		
	
	$handle = opendir($currentPath);
	if (!$handle)
	{
		// could not read directory
		return false;
	}
	
	while (false !== ($element = readdir($handle))) 
	{ 
		if ($element == "." || $element == "..")
		{
			continue;
		}
		
		if (is_dir($currentPath . '/' . $element))
		{
			// it's a directory
			// reading subdirectory
			if (unserializeCallback($className, $currentPath . '/' . $element))
			{
				closedir($handle);				
				
				return true;
			}
			continue;
		}
		
		// it's a file
		
		$filePath = '';
		
		// checking whether element ended on expected suffix
		if (strpos($element, $expectedFileNameSuffix) !== false
		 && strlen($element) == strrpos($element, $expectedFileNameSuffix) + strlen($expectedFileNameSuffix))
		{
			if ($currentPath)
			{
				$filePath = $currentPath . '/' . $element;
			}
			else
			{
				$filePath = $element;
			}
			
			// including file
			require_once($filePath);
			
			if (class_exists($className))
			{
				// class file has been found
				
				// saving result into global registry
				//$MDManager = adresvseti_framework_MetaData_MDManagerFactory::instance()->getManager('');
				//$MDManager->Registry->set('unserializeCallback.' . $className, $filePath);
				$path = $unserialize_dir . '/' . $className . '.php';
				file_put_contents($path, $filePath);		    

				closedir($handle);
				
				return true;
			}
		}
	}
	
	closedir($handle);
	
	return false;	
}

?>