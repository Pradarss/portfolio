// import { height, width } from '@mui/system';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

function Ball(){

    useEffect(()=>{
        //scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x343a40);

        //sphere
        const geometry = new THREE.SphereGeometry(3,32,32);
        const material = new THREE.MeshStandardMaterial({
            color: "white",
            roughness:0.5,
        })
        const mesh = new THREE.Mesh(geometry,material);
        scene.add(mesh);

        //sizes
        const canvas = document.querySelector('.canvas');
        const sizes = {
            width: canvas.parentElement.clientWidth,
            height: canvas.parentElement.clientHeight,
        };

        //light
        const light = new THREE.PointLight(0xffffff, 100, 100,0);
        light.position.set(0,10,10);
        light.intensity=1.25;
        scene.add(light);

        //camera
        const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height,0.1,100);
        camera.position.z=10;
        scene.add(camera);

        //renderer
        // const canvas = document.querySelector('.canvas');
        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(sizes.width,sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.render(scene,camera);
        
        //controls
        const controls = new OrbitControls(camera,canvas);
        controls.enableDamping=true;
        controls.enablePan=false;
        controls.enableZoom=false;
        controls.autoRotate=true;
        controls.autoRotateSpeed=2;

        //resize
        window.addEventListener('resize',()=>{
            sizes.width=window.innerWidth
            sizes.height=window.innerHeight

            //update camera
            camera.aspect=sizes.width/sizes.height;
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width,sizes.height);
        })

        // function loop(){
        //     controls.update();
        //     renderer.render(scene,camera);
        //     window.requestAnimationFrame(loop);
        // }
        // loop();
        let lastTime = 0;
        const fps = 30; // Target frame rate

        function loop(time) {
            if (time - lastTime > 1000 / fps) {
                controls.update();
                renderer.render(scene, camera);
                lastTime = time;
            }
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);


        //gsap
        const t1 = gsap.timeline({defaults:{duration:1}})
        t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});

        //mouse animations
        let mouseDown = false;
        let rgb = []
        window.addEventListener("mousedown",()=>{mouseDown = true});
        window.addEventListener("mouseup",()=>{mouseDown = false});

        window.addEventListener('mousemove',(e)=>{if(mouseDown){
            rgb = [
                Math.round((e.pageX/sizes.width)*255),
                Math.round((e.pageY/sizes.height)*255),
                150
            ]
            let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
            gsap.to(mesh.material.color,{r:newColor.r,g:newColor.g,b:newColor.b})
        }})
        let animationId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationId);

    }, []);

    return(
        <>
            <canvas className='canvas' style={{ display: 'block', width: '100%', height: '100%'}}></canvas>
        </>
    )
}

export default Ball;