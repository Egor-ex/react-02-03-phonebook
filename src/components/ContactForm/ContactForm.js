import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handelChange = e => {
		const { name, value } = e.currentTarget;

		this.setState({
			[name]: value,
		});
	};

	hendeleSubmit = e => {
		e.preventDefault();

		const { name, number } = this.state;

		this.props.onSubmit({ name, number });

		this.reset();
	};

	reset = () => {
		this.setState({ name: '', number: '' });
	};

	render() {
		return (
			<form onSubmit={this.hendeleSubmit} className={s.form}>
				<label className={s.label}>
					<span>Name</span>
					<input
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={this.state.name}
						onChange={this.handelChange}
					/>
				</label>
				<label className={s.label}>
					<span>Number</span>
					<input
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						value={this.state.number}
						onChange={this.handelChange}
					/>
				</label>

				<button type="submit" className={s.btn}>
					Add contact
				</button>
			</form>
		);
	}
}

ContactForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default ContactForm;
