import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
	return (
		<>
			<p className={s.item}>Find contacts by name</p>
			<input
				type="text"
				className="search"
				value={filter}
				onChange={onChange}
			/>
		</>
	);
};

Filter.propTypes = {
	onChange: PropTypes.func,
	filter: PropTypes.string,
};

export default Filter;
