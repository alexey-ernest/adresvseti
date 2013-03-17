<?php

$fileFieldName = 'emails-file';

if (isset($_FILES[$fileFieldName]) && is_uploaded_file($_FILES[$fileFieldName]['tmp_name']))
{
    // emails has been uploaded
    
    // retrieving file contents
    $emailsStr = file_get_contents($_FILES[$fileFieldName]['tmp_name']);
    
    // parsing emails
    $emails = array();
    $emailPattern = '/[\w\.-]+@[\w\.-]+\.\w+/i';
    $matches = array();
    if (preg_match_all($emailPattern, $emailsStr, $matches))
    {
        $emails = $matches[0];

        // printins emails
        echo count($emails) . ' emails<br/><br/>';
        
        foreach ($emails as $email)
        {
            echo $email . '<br/>';
        }
        
        exit;
    }
}

?>

<html>
<body>

<form id="emails-form" name="emails-form" method="post" enctype="multipart/form-data" action="" >
	<input type="hidden" name="MAX_FILE_SIZE" value="10485760">
  <p>
    <label for="emails-file">Файл с email адресами</label>
    <input type="file"" name="emails-file" id="emails-file"  />
  </p>
  <p>&nbsp;</p>
  <p>
  	<input type="submit" value="Найти email адреса" />
  </p>
</form>

</body>
</html>
