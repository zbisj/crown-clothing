import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenu } from './directory.styles';

import MenuItem from '../menu-item/MenuItem';
import { seleDirectorySections} from '../../redux/selectors/DirectorySelectors';


const Directory = ({sections}) => (

  <DirectoryMenu>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={ id }
          {...otherSectionProps}
        />
      ))
    }
  </DirectoryMenu>

);


const mapStateToProps = createStructuredSelector(
  {
    sections: seleDirectorySections
  }
)

export default connect(mapStateToProps)(Directory);
