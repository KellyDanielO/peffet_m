<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <a href="javascript:webSocketTest()">Run</a>
  <script>
    function webSocketTest(){
      if("WebSocket" in window){
        alert("websocket supported");
        var ws = new WebSocket("ws://localhost:8080/peffet_m/test");
        ws.onopen = () => {
          ws.send("Message sent");
          alert("message sent");
        }
        ws.onmessage = evt => {
          var rm = evt.data;
          alert("message recieved " + rm)
        }
        ws.onclose = () => {
          alert("Connection closed")
        }
      }else{
        alert("Websocket not supported")
      }
    }
  </script>
</body>
</html> -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <style>
    input {
      height: 11em;
      width: 100%;
      white-space: pre-wrap;
    }
  </style>
  <input type="text" name="" value="&nbsp;kelly&nbsp;wow">
</body>

</html>