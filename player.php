<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background: #000;
          }
          
          .video {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            
          }
         
          
          #fluid_video_wrapper_video {
            width: 100% !important;
            height: 100% !important;
          }
          
    </style>
</head>
<body>
    <?php
    
        if(isset($_GET['src'])){
    ?>
    <div class="video">
        <video id="video-id"><source src="<?php echo $_GET['src']; ?>" type="video/mp4" />
    </div>
    <?php
        }
    ?>
        
    <script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>
    <script src="js/video.js" ></script>
    <script>
        document.querySelector("body").addEventListener("dblclick", () => {
            document.querySelector(".video").classList.toggle("active");
        });
    </script>
</body>
</html>