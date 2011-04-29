/* ************************************************************************
   Copyright: 2009 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
              Fritz Zaucker <fritz.zaucker@oetiker.ch?
   Utf8Check: äöü
************************************************************************ */

/* ************************************************************************
************************************************************************ */

qx.Class.define("dbtoria.ui.form.ComboTable", {
    extend : combotable.ComboTable,

    /**
     * @param tableModel {} table model to use.
     *
     * Create a customized comboTable.
     *
     */
    construct : function(tableModel) {
        this.base(arguments, tableModel);
    },

    members : {
        setter: function(value) {
            if (value == null || value.id == undefined || value.id == null) {
                this.setModel(0);
                this.setValue('undefined');
            }
            else {
                this.setModel(value.id);
                this.setValue(value.text);
            }
        }
    }

});