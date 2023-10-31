AFRAME.registerComponent("bowling-balls", {
  init: function () {
    this.throwBall();
  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
      var Ball=document.createElement("a-entity")
      // Ball.setAttribute("geometry",{
      //   primitive:"sphere",
      //   radius:0.1,
      // })
      // Ball.setAttribute("material", "color", "green");
      Ball.setAttribute("gltf-model","models/bowling_ball/scene.gltf")
      Ball.setAttribute("scale",{x:3,y:3,z:3})

      var camera = document.querySelector("#camera");
        pos = camera.getAttribute("position");
        Ball.setAttribute("position", {
          x: pos.x,
          y: pos.y-1.2,
          z: pos.z,
        });
        var cam=document.querySelector("#camera").object3D
        var direction=new THREE.Vector3()
        cam.getWorldDirection(direction)
        Ball.setAttribute("velocity",direction.multiplyScalar(-10))

        var scene=document.querySelector("#scene")
        scene.appendChild(Ball)
      } 
    });
  },
});


