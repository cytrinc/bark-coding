document.addEventListener("DOMContentLoaded", function () {
    const dropAreas = document.querySelectorAll(".drop_box");
    dropAreas.forEach(dropArea => {
        const button = dropArea.querySelector("button");
        const input = dropArea.querySelector("input");

        if (button && input) {
            button.onclick = () => {
                input.click();
            };

            input.addEventListener("change", function (e) {
                if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    if (file.type.startsWith('image/')) { // Check if the file is an image
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            const filedata = `<img src="${e.target.result}" style="width:100px;">`;
                            const imageContainer = document.createElement('div');
                            imageContainer.innerHTML = filedata;
                            dropArea.appendChild(imageContainer);
                        };

                        reader.readAsDataURL(file);
                    } else if (file.type.startsWith('audio/')) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            const filedata = `<audio controls src="${e.target.result}"></audio>`;
                            const audioContainer = document.createElement('div');
                            audioContainer.innerHTML = filedata;
                            dropArea.appendChild(audioContainer);
                        };

                        reader.readAsDataURL(file);
                    } else{
                        const h2 = document.createElement("h2");
                        h2.innerText = file.name;
                        dropArea.appendChild(h2);
                    }
                    button.innerText = "Change";
                    const btn = document.createElement('button');
                    btn.innerText = "Insert"
                    btn.className = "btn"
                    btn.addEventListener('click', () => {
                        if (e.target.files.length > 0) {
                            const file = e.target.files[0];
                            if (file.type.startsWith('image/')) { // Check if the file is an image
                                openFile(e)
                            }else if (file.type.startsWith('audio/')) {
                                openAudioFile(e);
                            }
                        }
                    })
                    dropArea.appendChild(btn);
                }
            });
        }
    });
});
