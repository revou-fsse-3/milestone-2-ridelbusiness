import React, { useState } from 'react';

interface AddPokemonProps {
  onAdd: (name: string) => void;
}

const AddPokemon: React.FC<AddPokemonProps> = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddPokemon;
