<?php

$dir = getcwd() . '/files';

$cmd = isset($_GET['cmd']) ? $_GET['cmd'] : '';
$filePath = isset($_GET['filePath']) ? $_GET['filePath'] : '';

if ($cmd == 'del' && $filePath)
{
    // deleting file
    @unlink($dir . '/' . $filePath);
}


// reading files
$handle = opendir($dir);
$files = array();
if ($handle) 
{
    while (false !== ($file = readdir($handle))) 
    { 
        if ($file == '.' || $file == '..')
        {
            continue;
        }
        
        $files[] = $file;
    }

    closedir($handle); 
}

// printing files
foreach ($files as $file)
{
    echo "<a href='files/{$file}' target='_blank'>{$file}</a> (<a href='?cmd=del&filePath={$file}'>x</a>)<br/><br/>";
}

?>

<br/><br/>
<a href="uploader.html">Upload more...</a>