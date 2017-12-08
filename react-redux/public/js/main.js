(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var itens = function itens(state, action) {
    switch (action.type) {
        case 'NEW':
            var newItem = {
                id: +new Date(),
                name: action.data
            };
            return state.concat([newItem]);
        default:
            return state || [];
    }
};

var store = Redux.createStore(Redux.combineReducers({
    itens: itens
}));

store.subscribe(function () {
    console.log(store.getState());
});

store.dispatch({
    type: 'NEW',
    data: 'Item 1 redux'
});

var getItens = function getItens() {
    console.log('getItens');
    axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        console.log(response);
        store.dispatch({
            type: 'NEW',
            data: response.data[0].title
        });
    });
};

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            getItens();
        }
    }, {
        key: 'render',
        value: function render() {
            var reduxItens = this.props.itens.map(function (item, i) {
                return React.createElement(
                    'li',
                    { key: i, className: 'list-group-item' },
                    item.name
                );
            });

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row text-center' },
                    React.createElement(
                        'h1',
                        null,
                        'React com Redux'
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'list-group' },
                    React.createElement(
                        'li',
                        { className: 'list-group-item' },
                        'Item 1'
                    ),
                    React.createElement(
                        'li',
                        { className: 'list-group-item' },
                        'Item 2'
                    ),
                    React.createElement(
                        'li',
                        { className: 'list-group-item' },
                        'Item 3'
                    ),
                    React.createElement(
                        'li',
                        { className: 'list-group-item' },
                        'Item 4'
                    ),
                    reduxItens
                )
            );
        }
    }]);

    return List;
}(React.Component);

;

//getItens();
var state = store.getState();
ReactDOM.render(React.createElement(
    List,
    { itens: state.itens },
    'Testando'
), document.getElementById('root'));

},{}]},{},[1]);
