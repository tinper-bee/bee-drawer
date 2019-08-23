import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from '../src';
import Clipboard from 'bee-clipboard';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" Drawer基本示例","code":"/**\n *\n * @title Drawer基本示例\n * @description 弹出文字\n *\n */\n\nimport React, { Component } from 'react';\nimport { Icon, Button, Drawer } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button onClick={this.fPopDrawer} colors=\"primary\">打开</Button>\n                </div>\n                <Drawer closeIcon={<Icon type=\"uf-close-c\"/>} showClose={true} className={'demo1'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                 \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\nexport default Demo1;\n","desc":" 弹出文字","scss_code":".demo1{\n    .btnc{\n        margin-top: 10px;\n    }\n    .con{\n        padding: 10px 20px;\n    }\n}"},{"example":<Demo2 />,"title":" Drawer位置示例","code":"/**\n *\n * @title Drawer位置示例\n * @description 从上下左右弹出抽屉\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button, Drawer } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            left:false,\n            right:false,\n            top:false,\n            down:false\n        };\n    }\n    open=(placement)=>{\n        switch(placement){\n            case 'left':\n                this.setState({\n                    left:true\n                })\n            break;\n            case 'right':\n                this.setState({\n                    right:true\n                })\n            break;\n            case 'top':\n                this.setState({\n                    top:true\n                })\n            break;\n            case 'down':\n                this.setState({\n                    down:true\n                })\n            break;\n        }\n    }\n    close=(placement)=>{\n        switch(placement){\n            case 'left':\n                this.setState({\n                    left:false\n                })\n            break;\n            case 'right':\n                this.setState({\n                    right:false\n                })\n            break;\n            case 'top':\n                this.setState({\n                    top:false\n                })\n            break;\n            case 'down':\n                this.setState({\n                    down:false\n                })\n            break;\n        }\n    }\n    render () {\n        let { left,right,top,down } = this.state;\n        return (\n            <div className=\"demoPadding demo2\">\n                <div className=\"btnc\">  \n                    <Button colors=\"primary\" onClick={()=>{this.open('left')}}>左边</Button>\n                    <Button colors=\"primary\" onClick={()=>{this.open('right')}}>右边</Button>\n                    <Button colors=\"primary\" onClick={()=>{this.open('top')}}>上边</Button>\n                    <Button colors=\"primary\" onClick={()=>{this.open('down')}}>下边</Button>\n                </div>\n                <Drawer className={'demo2'} placement='left' title=\"我从左边来\" show={left} onClose={()=>{this.close('left')}}>\n                    <div className=\"con\">\n                        <p>我从左边来</p>\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                  \n                    </div>\n                </Drawer>\n                <Drawer className={'demo2'} placement='right' title=\"我从右边来\" show={right} onClose={()=>{this.close('right')}}>\n                    <div className=\"con\">\n                        <p>我从右边来</p>\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                  \n                    </div>\n                </Drawer>\n                <Drawer className={'demo2'} placement='top' title=\"我从上边来\" show={top} onClose={()=>{this.close('top')}}>\n                    <div className=\"con\">\n                        <p>我从上边来</p>\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                  \n                    </div>\n                </Drawer>\n                <Drawer className={'demo2'} placement='bottom' title=\"我从下边来\" show={down} onClose={()=>{this.close('down')}}>\n                    <div className=\"con\">\n                        <p>我从下边来</p>\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                  \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\nexport default Demo2;\n","desc":" 从上下左右弹出抽屉","scss_code":".demo2{\n    .btnc{\n        margin-top: 10px;\n        .u-button{\n            margin-right: 10px;\n        }\n    }\n    .con{\n        padding: 10px 20px;\n    }\n}"},{"example":<Demo3 />,"title":" Drawer表单示例","code":"/**\n *\n * @title Drawer表单示例\n * @description 弹出表单信息\n *\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox, Icon, Label, FormControl, Form, Button, Drawer } from 'tinper-bee';\n\n\nconst FormItem = Form.FormItem;\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: '表单'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    submit = (e) => {\n        e.preventDefault();\n        this.props.form.validateFields((err, values) => {\n            if (err) {\n                console.log('校验失败', values);\n            } else {\n                console.log('提交成功', values)\n            }\n        });\n    }\n    handleConfirmPassword = (rule, value, callback) => {\n        const { getFieldValue } = this.props.form;\n        if (value && value !== getFieldValue('password')) {\n            callback(<span><Icon type=\"uf-exc-t\"></Icon><span>两次输入不一致！</span></span>)\n        }\n        callback();\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button colors=\"primary\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className='demo3' title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <Form>\n                        <FormItem>\n                            <Label>用户名</Label>\n                            <FormControl placeholder=\"请输入用户名(包含数字和字母，8-15位)\"\n                                {...getFieldProps('username', {\n                                    validateTrigger: 'onBlur',\n                                    rules: [{\n                                        required: true, message: <span><Icon type=\"uf-exc-t\"></Icon><span>请输入用户名</span></span>,\n                                    }, {\n                                        pattern: /^(?!\\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{8,15}$/, \n                                        message: <span><Icon type=\"uf-exc-t\"></Icon><span>用户名格式错误</span></span>,\n                                    }],\n                                }) }\n                            />\n                            <span className='error'>\n                                {getFieldError('username')}\n                            </span>\n                        </FormItem>\n\n                        <FormItem>\n                            <Label>密码</Label>\n                            <FormControl placeholder=\"请输入密码\" type='password'\n                                {...getFieldProps('password', {\n                                    validateTrigger: 'onBlur',\n                                    rules: [{\n                                        required: true, message: <span><Icon type=\"uf-exc-t\"></Icon><span>请输入密码</span></span>,\n                                    }],\n                                }) }\n                            />\n                            <span className='error'>\n                                {getFieldError('password')}\n                            </span>\n                        </FormItem>\n\n                        <FormItem>\n                            <Label>再次输入密码</Label>\n                            <FormControl placeholder=\"请输入密码\" type='password'\n                                {...getFieldProps('password2', {\n                                    validateTrigger: 'onBlur',\n                                    rules: [{\n                                        required: true, message: <span><Icon type=\"uf-exc-t\"></Icon><span>请输入密码</span></span>,\n                                    }, {\n                                        validator: this.handleConfirmPassword\n                                    }],\n                                }) }\n                            />\n                            <span className='error'>\n                                {getFieldError('password2')}\n                            </span>\n                        </FormItem>\n\n                        <FormItem>\n                            <Label>邮箱</Label>\n                            <FormControl placeholder=\"请输入邮箱\"\n                                {...getFieldProps('email', {\n                                    validateTrigger: 'onBlur',\n                                    rules: [{\n                                        required: true, message: <span><Icon type=\"uf-exc-t\"></Icon><span>请输入邮箱</span></span>,\n                                    }, {\n                                        type: 'email', message: <span><Icon type=\"uf-exc-t\"></Icon><span>邮箱格式不正确</span></span>\n                                    }],\n                                }) }\n                            />\n                            <span className='error'>\n                                {getFieldError('email')}\n                            </span>\n                        </FormItem>\n                        <FormItem>\n                            <Label>手机号</Label>\n\n                            <FormControl placeholder=\"请输入手机号\"\n                                {...getFieldProps('phone', {\n                                    validateTrigger: 'onBlur',\n                                    rules: [{\n                                        required: true, message: <span><Icon type=\"uf-exc-t\"></Icon><span>请输入手机号</span></span>,\n                                    }, {\n                                        pattern: /^\\d{11}$/, message: <span><Icon type=\"uf-exc-t\"></Icon><span>手机号格式不正确</span></span>\n                                    }],\n                                }) }\n                            />\n\n                            <span className='error'>\n                                {getFieldError('phone')}\n                            </span>\n                        </FormItem>\n\n                        <FormItem style={{'paddingLeft':'106px'}}>\n                            <Checkbox\n                                defaultChecked={this.state.checkbox}\n                                {\n                                ...getFieldProps('checkbox', {\n                                    initialValue: false,\n                                }\n                                ) }\n                            >\n                            我已经阅读并同意相关条款\n                            </Checkbox>\n                        </FormItem>\n                        <FormItem style={{'paddingLeft':'106px'}}>\n                            <Button shape=\"border\" className=\"reset\" style={{\"marginRight\":\"8px\"}}>取消</Button>\n                            <Button colors=\"primary\" className=\"login\" onClick={this.submit}>注册</Button>\n                        </FormItem>\n                    </Form>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\nexport default Form.createForm()(Demo3);\n","desc":" 弹出表单信息","scss_code":".demo3{\n    .drawer-body{\n        min-width: 600px;\n        text-align: center;\n        padding-top: 40px;\n        .u-form-item .error{\n            display: block;\n        }\n        .u-form-item .u-checkbox-group, .u-form-item .u-form-control, .u-form-item .u-input-group .u-form-control, .u-form-item .u-select{\n            min-width: 60%;\n        }\n    }\n}"},{"example":<Demo4 />,"title":" Drawer多层抽屉示例","code":"/**\n *\n * @title Drawer多层抽屉示例\n * @description 弹出多层抽屉\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button, Drawer } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer',\n            secondTitle: 'Second Drawer',\n            showSecondDrawer: false,\n            secondPlacement: 'right'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n        this.fPopSecondDrawer = this.fPopSecondDrawer.bind(this);\n        this.fCloseSecondDrawer = this.fCloseSecondDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    fPopSecondDrawer(){\n        this.setState({\n            showSecondDrawer: true\n        })\n    }\n    fCloseSecondDrawer(){\n        this.setState({\n            showSecondDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title,secondTitle,showSecondDrawer,secondPlacement} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button colors=\"primary\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className={'demo4'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <Button onClick={this.fPopSecondDrawer} className=\"btn\">二级抽屉</Button>\n                    </div>\n                    <Drawer className={'demo4'} width={'320px'} zIndex={1000001} title={secondTitle} show={showSecondDrawer} placement={secondPlacement} onClose={this.fCloseSecondDrawer}>\n                        <div className=\"con\">\n                            <p>这是第一行文字</p>\n                            <p>这是第二行文字</p>\n                            <p>这是第三行文字，啦啦啦~</p>  \n                            <p>这是第四行文字，啦啦啦~</p>  \n                        </div>\n                    </Drawer>  \n                </Drawer>\n            </div>\n        )\n    }\n}\n\nexport default Demo4;\n","desc":" 弹出多层抽屉","scss_code":".demo4{\n\n    .con{\n        padding: 10px 20px;\n    }\n}"},{"example":<Demo5 />,"title":" Drawer列表信息示例","code":"/**\n *\n * @title Drawer列表信息示例\n * @description 弹出列表中一项的信息\n *\n */\n\nimport React, { Component } from 'react';\nimport { Drawer } from 'tinper-bee';\n\n\nclass Demo5 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer',\n            list: [\n                {id:1, name: 'XiaoMing',hometown:'henan', age:23, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaoming.png',\n                 province:'henan',city:'shangqiu',county:'suiyangqu',country:'chengguanzhen',\n                 phone:'138xxxxxxxx',email:'xiaoming@168.com',bio:'xiaoming@weibo.com',weixin:'xiaoming'},\n                {id:2, name: 'XiaoZhang',hometown:'hebei', age:25, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaozhang.png',\n                 province:'beijing',city:'beijing',county:'changping',country:'huilongguan',\n                 phone:'139xxxxxxxx',email:'xiaozhang@168.com',bio:'xiaozhang@weibo.com',weixin:'xiaozhang'}\n            ],\n            curItem: {}\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n        this.fItemClick = this.fItemClick.bind(this);\n    }\n    fItemClick(ev,item){\n        this.setState({\n            curItem: item,\n            showDrawer: true,\n            title: item.name + '\\'s Profile' \n        })\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {list,title,placement,showDrawer,curItem} = this.state;\n\n        return (\n            <div className=\"demoPadding demo5\">\n                <ul className=\"infos\">\n                    {\n                        list.map(item => {\n                            return  (<li key={item.id} className=\"info-item\">\n                                        <div className=\"item-inner\">\n                                            <div className=\"item-left\">\n                                                <img className=\"item-avatar\" src={item.avatar} />\n                                            </div>\n                                            <div className=\"item-main\">\n                                                <div>{item.name}</div>\n                                                <div>{item.email}</div>\n                                                <div>{item.hometown}</div>\n                                            </div>\n                                            <div className=\"item-right\">\n                                                <a className=\"item-link\" onClick={(ev) => this.fItemClick(ev,item)} href=\"javascript:;\">View</a>\n                                            </div>\n                                        </div>\n                                    </li>)\n                        })\n                    }\n                </ul>\n                <Drawer className={'demo5'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Avatar</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <img className=\"sec-avatar\" src={curItem.avatar} />\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Profile</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Name: </span>\n                                        <span>{curItem.name}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>hometown: </span>\n                                        <span>{curItem.hometown}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Age: </span>\n                                        <span>{curItem.age}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>School: </span>\n                                        <span>{curItem.school}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Address</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Province: </span>\n                                        <span>{curItem.province}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>City: </span>\n                                        <span>{curItem.city}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>County: </span>\n                                        <span>{curItem.county}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Country: </span>\n                                        <span>{curItem.country}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Contract</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Phone: </span>\n                                        <span>{curItem.phone}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Email: </span>\n                                        <span>{curItem.email}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Bio: </span>\n                                        <span>{curItem.bio}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Weixin: </span>\n                                        <span>{curItem.weixin}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\nexport default Demo5;\n","desc":" 弹出列表中一项的信息","scss_code":".demo5{\n    .con{\n        padding: 10px 20px;\n        padding-top: 0;\n    }\n    .section:first-child{\n        margin-top: 15px;\n    }\n    .section:nth-child(2){\n        margin-top: 20px;\n    }\n    .section{\n        margin-top: 30px;\n    }\n    .sec-title{\n        font-size: 22px;\n        font-weight: bold;\n    }\n    .sec-avatar{\n        width: 40px;\n        height: 40px;\n        margin-top: 10px;\n    }\n    .col{\n        display: inline-block;\n    }\n    .col:first-child{\n        margin-left: 0;\n        width: 200px;\n    }\n    .info-item{width: 300px;}\n    .info-item:first-child{\n        .item-inner{border-top-left-radius:4px;border-top-right-radius:4px;}\n    }\n    .info-item:last-child{\n        margin-top:-1px;\n        .item-inner{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}\n    }\n    .item-inner{overflow: hidden;border:1px solid #ccc;padding:10px 20px;}\n    .item-left,.item-main,.item-right{float:left}\n    .item-main{padding-left:30px;}\n    .item-right{padding-left:30px;padding-top:20px;}\n    .item-avatar{width:30px;height:30px;}\n    .item-link{color:#f53c32;}\n    .item-link:link,.item-link:visited,.item-link::active,.item-link:hover{\n        color: #f53c32;\n    }\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
