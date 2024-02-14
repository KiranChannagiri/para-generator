let paragraph=["Bioluminescence, a captivating natural phenomenon, is the ability of certain organisms to produce light through a chemical reaction. One remarkable example is the glow-in-the-dark mushrooms found in forests around the world. These fungi create an enchanting glow that illuminates the dark woodland, creating an otherworldly atmosphere.",
"The depths of the ocean reveal another mesmerizing display of bioluminescence. Many marine organismssuch as jellyfish and deep-sea creatures, emit light to communicate, attract mates, or ward off predators. The ocean's depths become a living light show, showcasing the diversity and adaptability of life in the most extreme environments.",
"Fireflies, or lightning bugs, are a common terrestrial example of bioluminescence. These insects use their radiant glow to attract mates during the mating season. Witnessing a summer night illuminated by the soft flickering lights of fireflies is a magical experience, evoking a sense of wonder and nostalgia.",
"Some species of fungi, like the mycena chlorophos, are known for their bioluminescent properties. These mushrooms emit a soft, greenish light, creating an ethereal ambiance in the forests where they grow. Researchers are exploring the potential of harnessing these natural lights for eco-friendly sources of illumination.",
"The bioluminescent bay in Vieques, Puerto Rico, is home to millions of microscopic organisms called dinoflagellates that light up the water when disturbed. Kayaking through the bay at night reveals an awe-inspiring display as the paddles and movement create trails of blue-green light, making it a unique and unforgettable experience.",
"The deep-sea anglerfish is a fascinating creature that uses a bioluminescent lure to attract prey in the pitch-black depths. This adaptation showcases the incredible strategies organisms develop to survive in extreme environments where sunlight cannot penetrate.",
"Glowing fungi are not limited to the forest floor; they can also be found high in the trees. Some species of bracket fungi, like the jack-o'-lantern mushroom, emit a soft glow that adds an eerie beauty to the nocturnal forest canopy.",
"The mysterious blue glow of the Glowworm Caves in New Zealand is created by thousands of glowworms that line the cave walls and ceilings. As tourists glide through the underground river, they are treated to a celestial-like display, highlighting the beauty of symbiosis in nature.",
"Bioluminescent plankton, commonly known as sea sparkle, transform coastlines into living light displays. Beaches in places like the Maldives, Vietnam, and the Maldives come alive with the magical glow of these tiny organisms, creating a surreal and romantic atmosphere.",
"The bioluminescent click beetle, found in parts of Asia, uses its ability to produce light as a defense mechanism. When threatened, the beetle emits a series of quick flashes, creating confusion and allowing it to escape from potential predators. This showcases how bioluminescence plays a crucial role in the survival strategies of various organisms in the natural world."]
let para = document.getElementById("para");
let form = document.querySelector(".form");
let btn = document.querySelector("#btn");
let number = document.querySelector("#number");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    console.log("hello");
     // A click on a form submit button – initiates its submission to the server.
    //in a console the number will be in the blue ans string will be in the black color
    let num = number.value;
    console.log(num);
    console.log(typeof num);

    let intenger = parseInt(number.value);
    console.log(intenger);
    console.log(typeof intenger);
    console.log(isNaN(intenger));
    let random = Math.floor(Math.random()*10);
    console.log(random); 
    if(isNaN(intenger) || intenger<=0 || intenger>10)
    {
        para.innerHTML=paragraph[random];
    }
    if(intenger>=2 && intenger<=10)
    {
        let paragraphs = paragraph.slice(0,intenger);
        console.log(paragraphs);
        paragraphs = paragraphs.map((item)=>
        {
            return `<p class="space">${item}</p>`;
        });
        paragraphs= paragraphs.join(" ");
        para.innerHTML = paragraphs;
    }
    });