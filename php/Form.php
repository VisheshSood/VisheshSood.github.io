<?php
if(isset($_POST['catalog.pdf'])){
    $file = $_POST['catalog.pdf'];
    // Add a file type check here for security purposes so that nobody can-
    // download PHP files or other sensitive files from your server by spoofing this script
    header('Content-type: pdf');
    header('Content-Disposition: attachment; filename="'.$file.'"');
    readfile('mystery_folder/'.$file);
    exit();
}
?>
<form action="force_download.php" method="post" name="downloadform">
  <input name="file_name" value="track1.mp3" type="hidden">
  <input type="submit" value="Download the MP3">
</form>