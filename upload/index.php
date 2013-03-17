<?php

// multiple upload script

//echo 'OK';

file_put_contents('post.txt', serialize($_POST));
//return;


//$filesStr = file_get_contents('files.txt');
//$files = unserialize($filesStr);

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

$server_path = $_SERVER['DOCUMENT_ROOT'] . '/upload/files/';

foreach ($uploadedFiles as $uploadedFile)
{
    if (!move_uploaded_file($uploadedFile['tmp_name'], $server_path . $uploadedFile['name']))
    {
        // error
        continue;
    }
}

?>