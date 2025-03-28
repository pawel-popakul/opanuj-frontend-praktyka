import type { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
}

export default CharacterCard;
