/** @odoo-module **/
import {Component, useRef} from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useInputField } from "@web/views/fields/input_field_hook";

export class TimePicker extends Component {
    static template = "OdooTimePicker.Template";
    static props = {
        record: Object,
        name: String,
        readonly: { type: Boolean, optional: true },
        options: { type: Object, optional: true },
        value: { type: [String, Boolean], optional: true },
        id: { type: String, optional: true },
        placeholder: { type: String, optional: true },
        "*": true,
    };

    setup() {
        this.timeInput = useRef("timeInput");
        useInputField({
            getValue: () => {
                const value = this.props.record.data[this.props.name];
                return value ? value : "";
            },
            parse: (v) => v,
        });
    }

    async onIconClick() {
        if (this.timeInput.el && !this.props.readonly) {
            this.timeInput.el.focus();
            this.timeInput.el.showPicker?.();
        }
    }
}

export const timePicker = {
    component: TimePicker,
    supportedTypes: ["char"],
};

registry.category("fields").add("time_picker", timePicker);