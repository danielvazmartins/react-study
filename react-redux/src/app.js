const itens = (state, action) => {
    switch (action.type) {
        case 'NEW':
            let newItem = {
                id: +new Date,
                name: action.data                
            };
            return state.concat([newItem]);
        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    itens
}));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'NEW',
    data: 'Item 1 redux'
});

const getItens = () => {
    console.log('getItens');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response);
        store.dispatch({
            type: 'NEW',
            data: response.data[0].title
        });
    });
};

class List extends React.Component {
    componentDidMount() {
        getItens();
    }

	render() {
        var reduxItens = this.props.itens.map(function(item, i){
            return (
                <li key={i} className="list-group-item">
                    {item.name}
                </li>
            );
        });

		return (
            <div className="container">
                <div className="row text-center">
                    <h1>React com Redux</h1>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Item 1
                    </li>
                    <li className="list-group-item">
                        Item 2
                    </li>
                    <li className="list-group-item">
                        Item 3
                    </li>
                    <li className="list-group-item">
                        Item 4
                    </li>
                    {reduxItens}
                </ul>
            </div>
		);
	}
};

//getItens();
var state = store.getState();
ReactDOM.render(
	<List itens={state.itens}>Testando</List>,
	document.getElementById('root')
);