import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDel }) => {
	return (
		<div>
			{contacts.map(contact => (
				<ul className={s.item} key={contact.id}>
					<li className={s.list}>
						{contact.name}: {contact.number}
					</li>
					<button
						className={s.btnDel}
						data-contact-id={contact.id}
						onClick={handleDel}
					>
						Delete
					</button>
				</ul>
			))}
		</div>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
	handleDel: PropTypes.func,
};

export default ContactList;
