import { JSONEditor } from 'vanilla-jsoneditor';

export function createEditor() {
    const editor = new JSONEditor({
        target: document.getElementById('jsoneditor')
    });
    const content = {
      text: undefined, // used in text mode
      json: {
        array: [1, 2, 3],
        boolean: true,
        color: '#82b92c',
        null: null,
        number: 123,
        object: { a: 'b', c: 'd' },
        time: 1575599819000,
        string: 'Hello World'
      }
    };
    editor.set(content);
}

// forms..
function parseTextarea(form_id, val, input_field) {
    var pars = val.split('\n')
    for (var i in pars) {
        $('#' + form_id).append('<input type="hidden" name="' + input_field + '" value="' + pars[i] + '" />');
    }
}
