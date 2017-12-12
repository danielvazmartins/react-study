// Reducer que vai adicionar um item
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

// Coloca o reducer dentro do store
const store = Redux.createStore(Redux.combineReducers({
    itens
}));

// Adiciona um novo item
store.dispatch({
    type: 'NEW',
    data: 'Item 1 redux'
});

const getItens = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response);
        // Adiciona os itens retornados
        for ( var i=0; i<5; i++) {
            store.dispatch({
                type: 'NEW',
                data: response.data[i].title
            });
        }        
    });
};

// Componente para adiciona um novo item
class AddItem extends React.Component {
    render() {
        var addItem = () => {
            // Passa o valor do input para a função addItem do props
            this.props.addItem(this.refs.item.value || '');
            // Limpa o input
            this.refs.item.value = '';
        }

        return(
            <div className="form-group">
                <label>Incluir novo item</label>
                <div className="input-group">
                    <input type="text" className="form-control" ref="item" />
                    <span className="input-group-btn">
                        <a className="btn btn-primary" onClick={addItem}>Salvar</a>
                    </span>
                </div>
            </div>
        );
    }
}

// Componente da lista de itens
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
                {reduxItens}
            </ul>
		);
	}
};

// Inicializa a tela
let fnRender = () => {
    var state = store.getState();

    // Adiciona um novo item
    var addItem = (newItem) => {
        store.dispatch({
            type: 'NEW',
            data: newItem
        });
    }

    ReactDOM.render(
        <div className="container">
            <div className="row text-center">
                <h1>React com Redux</h1>
            </div>
            <AddItem addItem={text => addItem(text) }></AddItem>
            <List itens={state.itens}></List>
        </div>,
        document.getElementById('root')
    );
};
fnRender();

// Renderiza a tela quando há alteração no state
store.subscribe(fnRender);