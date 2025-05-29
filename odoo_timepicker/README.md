# Odoo 18 Time Picker Widget

A time picker component specifically designed for Odoo 18, developed using the OWL 2 framework, allowing users to conveniently select time (hours, minutes, seconds) in the interface.

## Features

- ✅ **OWL 2 Compatible**: Built on the OWL 2 framework
- ✅ **Click to Select**: Click anywhere on the input field to open the time picker
- ✅ **Clean Design**: Hides the browser's default clock icon for a clean interface
- ✅ **Char Field Support**: Stores time as string format (HH:MM:SS)
- ✅ **Responsive Design**: Adapts to different screen sizes and devices
- ✅ **Readonly Mode**: Supports readonly state display
- ✅ **Cross-browser Compatible**: Supports mainstream modern browsers

## Usage

### 1. Define Fields in Model
```python
class YourModel(models.Model):
    _name = 'your.model'
    
    work_time = fields.Char(string='Work Time', help='Format: HH:MM:SS')
    start_time = fields.Char(string='Start Time')
    end_time = fields.Char(string='End Time')
```

### 2. Use in Views
```xml
<!-- Form View -->
<record id="view_your_model_form" model="ir.ui.view">
    <field name="name">your.model.form</field>
    <field name="model">your.model</field>
    <field name="arch" type="xml">
        <form>
            <sheet>
                <group>
                    <field name="work_time" widget="time_picker"/>
                    <field name="start_time" widget="time_picker" placeholder="Select start time"/>
                    <field name="end_time" widget="time_picker"/>
                </group>
            </sheet>
        </form>
    </field>
</record>

<!-- List View -->
<record id="view_your_model_tree" model="ir.ui.view">
    <field name="name">your.model.tree</field>
    <field name="model">your.model</field>
    <field name="arch" type="xml">
        <tree>
            <field name="work_time" widget="time_picker"/>
            <field name="start_time" widget="time_picker"/>
            <field name="end_time" widget="time_picker"/>
        </tree>
    </field>
</record>
```

## Available Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `widget` | string | - | Must be set to `"time_picker"` |
| `placeholder` | string | - | Input field placeholder text |
| `readonly` | boolean | false | Whether the field is in readonly mode |

## Data Format

- **Storage Format**: String (HH:MM:SS)
- **Example Values**: `"09:30:00"`, `"14:15:30"`, `"23:59:59"`
- **Empty Value Handling**: Empty string or `False`

## Browser Compatibility

| Browser | Version | Support Status |
|---------|---------|----------------|
| Chrome | 20+ | ✅ Fully Supported |
| Firefox | 57+ | ✅ Fully Supported |
| Safari | 14.1+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |

## Important Notes

1. **Field Type**: Must use `fields.Char` field type
2. **Time Format**: Component automatically handles HH:MM:SS format
3. **Mobile Devices**: Displays native time picker on mobile devices
4. **Performance**: Component is optimized for use in large lists