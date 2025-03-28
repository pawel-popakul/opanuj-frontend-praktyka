import NameInput from './NameInput';
import GenderSelect from './GenderSelect';
import SortSelect from './SortSelect';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput name={name} setName={setName} />
      <GenderSelect gender={gender} setGender={setGender} />
      <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
