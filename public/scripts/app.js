'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
    name: 'vikima',
    getName: function getName() {
        return this.name;
    }
};
var name = obj.getName();
var name2 = obj.getName.bind({ name: 'sdf' });
console.log(name2());

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOptionSingle = _this.handleDeleteOptionSingle.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // will only be show after props / status is changed
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // will only execute when  the given component disappears
            console.log("componnetWillUnmount");
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            /*    this.setState(()=>{
                    return {
                        options : []
                    }
                });*/
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOptionSingle',
        value: function handleDeleteOptionSingle(optionToremove) {
            this.setState(function (preState) {
                return {
                    options: preState.options.filter(function (option) {
                        return optionToremove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var _this2 = this;

            this.setState(function () {
                var randomNum = Math.floor(Math.random() * _this2.state.options.length);
                alert(_this2.state.options[randomNum]);
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add iten';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exist';
            }
            this.setState(function (preState) {
                return { //突然发现变量名不是很重要，似乎放再这里就是prev的意思
                    options: preState.options.concat(option)
                };
            });
            /*   this.setState((preState)=>{
                   return{
                       options : preState.options.concat(option)
                   }
               });*/
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hand of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOptionSingle: this.handleDeleteOptionSingle
                }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
    /*
    class Header extends React.Component { 
        render(){
            return (
                <div>
                    <h1> {this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            );
        }
    };
    */

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};
/*class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled = {!this.props.hasOptions}
                > 
                What should I do?
                </button>
            </div>
        )
    }
}
*/
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            ' Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOptionSingle: props.handleDeleteOptionSingle });
        }),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            ' RemoveAll'
        )
    );
};
/*class Options extends React.Component{
 /*   constructor(props){
        super(props);
     //   this.RemoveAll = this.RemoveAll.bind(this);//只bind一次
    }*/
/*    render(){
        return (
            <div>
            {
                this.props.options.map((option) =>
                <Option key={option} optionText={option}/>)
            }
                <button onClick = {this.props.handleDeleteOptions}> RemoveAll</button>
            </div>
        );
    }
}*/

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.optionText
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOptionSingle(props.optionText);
                }
            },
            'Delte'
        )
    );
};
/*
class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}*/

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this3 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this3.AddOptions = _this3.AddOptions.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOptions, [{
        key: 'AddOptions',
        value: function AddOptions(e) {
            e.preventDefault();
            var value = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(value);
            e.target.elements.option.value = "";
            this.setState(function () {
                return {
                    error: error
                };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
            /*
            this.setState(() => {
                return { error }
            })*/
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.AddOptions },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(AddOptions, null)
);
//ReactDOM.render(jsx,document.getElementById('app'));


//stateless function components
/*user = function(){}*/
var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: '
        )
    );
};
ReactDOM.render(React.createElement(User, { name: 'mabel' }), document.getElementById('app2'));
ReactDOM.render(React.createElement(IndecisionApp /*options= {['devils den','second']}*/, null), document.getElementById('app'));
