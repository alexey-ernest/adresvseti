<?php

// max upload script

ini_set("max_execution_time", 600);

// setting maximum upload file size
ini_set('upload_max_filesize', '500M');

// setting maximum post message
ini_set('post_max_size', '500M');

// setting maximum parsing time
ini_set('max_input_time', '600');

// time limit in seconds
set_time_limit(300);

$uploadedFiles = array();
foreach ($_FILES as $dataName => $uploadedFile)
{
    if (count($uploadedFile['name']) > 1)
    {
        // multiple files
		for ($i = 0; $i < count($uploadedFile['name']); $i++)
		{
		    if (!$uploadedFile['name'][$i])
		    {
		        continue;
		    }
		        
		    $uploadedFile = array();
		        
		    $uploadedFile['name'] = $uploadedFile['name'][$i];
		    $uploadedFile['tmp_name'] = $uploadedFile['tmp_name'][$i];
		    $uploadedFile['error'] = $uploadedFile['error'][$i];
		    $uploadedFile['type'] = $uploadedFile['type'][$i];
		        
		    $uploadedFiles[] = $uploadedFile;
		}
    }
	elseif (count($uploadedFile['name']) == 1)
	{
	    // one file
	    $uploadedFiles[] = array(
	    	'name' => $uploadedFile['name'],
	    	'tmp_name' => $uploadedFile['tmp_name'],
	        'error' => $uploadedFile['error'],
	    	'type' => $uploadedFile['type']
	    ); 
	}
}

$server_path = $_SERVER['DOCUMENT_ROOT'] . '/maxupload/files/';

foreach ($uploadedFiles as $uploadedFile)
{
    if (!move_uploaded_file($uploadedFile['tmp_name'], $server_path . $uploadedFile['name']))
    {
        // error
        continue;
    }
}

// redirecting
header('Location: list.php');

?>