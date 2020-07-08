import { describe } from 'react-desc';
import { getAvailableAtBadge } from '../../utils';
export var doc = function doc(Card) {
  var DocumentedCard = describe(Card).availableAt(getAvailableAtBadge('Card')).description('A Card.').usage("import { Card } from 'grommet';\n<Card/>").intrinsicElement('div');
  return DocumentedCard;
};
export var themeDoc = {
  'card.container': {
    description: 'Any valid Box prop for the Card container.',
    type: 'object',
    defaultValue: "{ round: 'small', elevation: 'small' }"
  },
  'card.header': {
    description: 'Any valid Box prop for the CardHeader.',
    type: 'object',
    defaultValue: {}
  },
  'card.body': {
    description: 'Any valid Box prop for the CardBody.',
    type: 'object',
    defaultValue: {}
  },
  'card.footer': {
    description: 'Any valid Box prop for the CardFooter container.',
    type: 'object',
    defaultValue: "{ background: 'background-contrast' }"
  }
};