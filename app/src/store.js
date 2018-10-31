import {store} from 'react-easy-state';


export default store({

    // {
    //      text: string
    //      readOnly: boolean
    // }
    notes: [],

    helperBar: {
        visible: false,
        text: '',
        _helpTexts: {
            'CREATE_NOTE': 'Создать заметку',
            'EDIT_NOTE':   'CTRL + ENTER для сохранения',
            'DELETE_NOTE': 'Удалить заметку',
        },
        showHelp(helpType) {
            this.visible = true;
            this.text = this._helpTexts[helpType];
        },
        hideHelp() {
            this.visible = false;
            this.text = '';
        }
    },

})
