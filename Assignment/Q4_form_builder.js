// Q4: Custom Form Builder
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerId) {
        let html = "<form id='dynamicForm'>";
        this.fields.forEach(f => {
            html += `<label>${f.label}</label><input type="${f.type}" name="${f.label}" /><br/>`;
        });
        html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
        document.getElementById(containerId).innerHTML = html;
    }
}

function getFormData() {
    const form = document.getElementById("dynamicForm");
    const data = {};
    [...form.elements].forEach(el => {
        if (el.name) data[el.name] = el.value;
    });
    console.log("Form Data:", data);
}
