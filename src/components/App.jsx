import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  inputHundleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  hundleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.hundleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.inputHundleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={this.state.number}
              onChange={this.inputHundleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <label htmlFor="">
            Find contacts by name
            <input
              type="text"
              value={this.state.filter}
              onChange={this.changeFilter}
            />
          </label>

          <ul>
            {visibleContact.map(item => {
              return (
                <li key={item.id}>
                  {item.name}:{item.number}{' '}
                  <button
                    type="button"
                    onClick={() => this.deleteContact(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
