<html>
    <body>
        <canvas id="canvas" width="800" height="600"></canvas>
        <script src="./robot-arm.js"></script>
        <script>
            var canvas = document.getElementById("canvas");
            var robotArm = new RobotArm(canvas);
            robotArm.loadLevel("exercise 2");
            
            robotArm.run();
        </script>
    </body>
</html>
