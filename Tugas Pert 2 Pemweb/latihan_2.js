document.addEventListener("DOMContentLoaded", function() {
    // Create form element
    const form = document.createElement("form");

    // Create form title
    const title = document.createElement("h1");
    title.textContent = "Formulir Pendaftaran";
    
    // Nama input
    const nameGroup = createInputGroup("Nama", "text", "nama", "Your name..");

    // NIM input
    const nimGroup = createInputGroup("NIM", "text", "nim", "NIM..");

    // Tempat Lahir input
    const birthPlaceGroup = createInputGroup("Tempat Lahir", "text", "tlahir", "Tempat Lahir..");

    // Tanggal Lahir input
    const birthDateGroup = createInputGroup("Tanggal Lahir", "date", "tglahir", "");

    // Program Studi dropdown
    const prodiGroup = createSelectGroup("Program Studi", "prodi", [
        {value: "PGSD", label: "Pendidikan Guru Sekolah Dasar"},
        {value: "PGPAUD", label: "Pendidikan Guru Anak Usia Dini"},
        {value: "PKP", label: "Pendidikan Kelautan dan Perikanan"},
        {value: "SIK", label: "Sistem Informasi Kelautan"},
        {value: "LK", label: "Logistik Kelautan"}
    ]);

    // Jenis Kelamin radio buttons
    const genderGroup = createRadioGroup("Jenis Kelamin", "jk", [
        {value: "Laki-laki", label: "Laki-laki"},
        {value: "Perempuan", label: "Perempuan"}
    ]);

    // Hobi checkboxes
    const hobbyGroup = createCheckboxGroup("Hobi", "hobi", [
        {value: "Baca", label: "Baca"},
        {value: "Nulis", label: "Nulis"},
        {value: "Nonton", label: "Nonton"},
        {value: "Olahraga", label: "Olahraga"},
        {value: "Bernyanyi", label: "Bernyanyi"}
    ]);

    // Submit button
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Simpan";

    // Append elements to form
    form.appendChild(title);
    form.appendChild(nameGroup);
    form.appendChild(nimGroup);
    form.appendChild(birthPlaceGroup);
    form.appendChild(birthDateGroup);
    form.appendChild(prodiGroup);
    form.appendChild(genderGroup);
    form.appendChild(hobbyGroup);
    form.appendChild(submitButton);

    // Append form to the container
    document.getElementById("form-container").appendChild(form);

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });

    // Helper functions to create form elements
    function createInputGroup(labelText, inputType, inputName, placeholder) {
        const div = document.createElement("div");
        div.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        const input = document.createElement("input");
        input.type = inputType;
        input.name = inputName;
        input.placeholder = placeholder;

        div.appendChild(label);
        div.appendChild(input);
        return div;
    }

    function createSelectGroup(labelText, selectName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        const select = document.createElement("select");
        select.name = selectName;

        options.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.label;
            select.appendChild(option);
        });

        div.appendChild(label);
        div.appendChild(select);
        return div;
    }

    function createRadioGroup(labelText, radioName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group", "radio-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        div.appendChild(label);

        options.forEach(optionData => {
            const radioLabel = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = radioName;
            radio.value = optionData.value;

            radioLabel.appendChild(radio);
            radioLabel.appendChild(document.createTextNode(optionData.label));
            div.appendChild(radioLabel);
        });

        return div;
    }

    function createCheckboxGroup(labelText, checkboxName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group", "checkbox-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        div.appendChild(label);

        options.forEach(optionData => {
            const checkboxLabel = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = checkboxName;
            checkbox.value = optionData.value;

            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(optionData.label));
            div.appendChild(checkboxLabel);
        });

        return div;
    }
});
