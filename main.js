function InputUser() {
    let NameOrg = "Общество с ограниченной ответственностью Опытно-экспериментальный машиностроительный завод «ТАПАРТ»";
    let trainer_input = document.getElementById('TrainerInput').value;
    let number_input = document.getElementById('NumberInput').value;
    let date_input = document.getElementById('DateInput').value;
    let ty_input = document.getElementById('TYInput').value;

    let trainer = document.getElementById('Trainer');
    let number = document.getElementById('Number');
    let date = document.getElementById('Date');
    let ty = document.getElementById('TY');

    const [year, month, day] = date_input.split('-');

    trainer.textContent = trainer_input;
    number.textContent = "Зав.№ " + number_input;
    date.textContent = `Дата ${day}.${month}.${year} г.`;
    ty.textContent = ty_input;

    let setSize = $('#Trainer');
    let widthText =  setSize.width();
    console.log(widthText);
    if(widthText > 361){
        $('#Trainer').css({
            'font-size': 14.5+'px',
            'overflow-wrap': 'break-word',
            'height': 30+'px',
            'line-height': 1,
        })
        $('#Number').css({
            'height': 18+'px'
        })
        $('#Date').css({
            'height': 18+'px'
        })
        $('#TY').css({
            'height': 18+'px'
        })
    }

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: `${NameOrg} ${trainer_input} Зав.№ ${number_input} Дата ${date_input} г. ${ty_input}`,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L
    });
}

function pdfSavePrint() {
    // если через канваз, но качество теряется
    // let page = document.getElementsByClassName('containerPDF');
    // html2PDF(page, {
    //     jsPDF: {format: 'a4'},
    //     image: {type: 'jpeg', quality: 1},
    //     output: './pdf/generate.pdf',
    // });
    window.print();
}

function jpgSave() {
    html2canvas(document.getElementById('containerJpeg')).then(function (canvas) {
        document.body.appendChild(canvas);
        canvas.style.display = canvas.style.display === 'none' ? 'block' : 'none';
        const link = document.getElementById('link');
        link.setAttribute('download', 'imagename.jpeg');
        link.setAttribute('href', canvas.toDataURL("image/jpeg", 0.98).replace("image/jpeg", "image/octet-stream"));
    });
}