# Odoo 18 时间选择器 Widget
一个专为 Odoo 18 设计的时间选择器组件，使用 OWL 2 框架开发，允许用户在界面上方便地选择时间（时分秒）。

## 功能特性

- ✅ **OWL 2 兼容**: 基于 OWL 2 框架开发
- ✅ **点击即选择**: 点击输入框任意位置即可弹出时间选择器
- ✅ **无图标设计**: 隐藏浏览器默认的时钟图标，保持界面简洁
- ✅ **Char 字段支持**: 将时间存储为字符串格式 (HH:MM:SS)
- ✅ **响应式设计**: 适配不同屏幕尺寸和设备
- ✅ **只读模式**: 支持只读状态显示
- ✅ **跨浏览器兼容**: 支持主流现代浏览器

## 使用方法

### 1. 在模型中定义字段
```python
class YourModel(models.Model):
    _name = 'your.model'
    
    work_time = fields.Char(string='工作时间', help='格式: HH:MM:SS')
    start_time = fields.Char(string='开始时间')
    end_time = fields.Char(string='结束时间')
```

### 2. 在视图中使用
```xml
<!-- 表单视图 -->
<record id="view_your_model_form" model="ir.ui.view">
    <field name="name">your.model.form</field>
    <field name="model">your.model</field>
    <field name="arch" type="xml">
        <form>
            <sheet>
                <group>
                    <field name="work_time" widget="time_picker"/>
                    <field name="start_time" widget="time_picker" placeholder="选择开始时间"/>
                    <field name="end_time" widget="time_picker"/>
                </group>
            </sheet>
        </form>
    </field>
</record>

<!-- 列表视图 -->
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

## 可用属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `widget` | string | - | 必须设为 `"time_picker"` |
| `placeholder` | string | - | 输入框占位符文本 |
| `readonly` | boolean | false | 是否为只读模式 |

## 数据格式

- **存储格式**: 字符串 (HH:MM:SS)
- **示例值**: `"09:30:00"`, `"14:15:30"`, `"23:59:59"`
- **空值处理**: 空字符串或 `False`

## 浏览器兼容性

| 浏览器 | 版本 | 支持状态 |
|--------|------|----------|
| Chrome | 20+ | ✅ 完全支持 |
| Firefox | 57+ | ✅ 完全支持 |
| Safari | 14.1+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |

## 注意事项

1. **字段类型**: 必须使用 `fields.Char` 字段类型
2. **时间格式**: 组件自动处理 HH:MM:SS 格式
3. **移动设备**: 在移动设备上会显示原生时间选择器
4. **性能**: 组件经过优化，适合在大型列表中使用
