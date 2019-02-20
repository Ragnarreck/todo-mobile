import React from 'react';
import moment from 'moment';
import R from 'ramda';
import PropTypes from 'prop-types';
import { Input} from '../../ui/Input';
import { PrimaryButton} from '../../ui/PrimaryButton';
import { SecondaryButton} from '../../ui/SecondaryButton';
import { convertWidthPercentToVirtualPoints } from '../../utils/dimensions/index';
import {
  Title,
  Wrapper,
  InputWrapper,
  ButtonSection,
  ButtonWrapper,
} from './styles';

export class Note extends React.Component {
  static propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  state = {
    title: R.path(['note', 'title'], this.props) || '',
    description: R.path(['note', 'description'], this.props) || '',
    date: R.path(['note', 'date'], this.props) || moment().format('YYYY-MM-DD'),
  };

  changeField = field => ({ nativeEvent: { text } }) => this.setState(state => ({ ...state, [field]: text }));

  render() {
    const { isEditMode, onClose, onSubmit } = this.props;
    const note = R.prop('note', this.props) || {};
    return (
      <Wrapper>
        <Title>
          {isEditMode ? 'Edit' : 'Create'} Note
        </Title>
        <InputWrapper>
          <Input
            placeholder="Title"
            value={this.state.title}
            onChange={this.changeField('title')}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            isTextArea
            placeholder="Description"
            value={this.state.description}
            onChange={this.changeField('description')}
          />
        </InputWrapper>
        <ButtonSection>
          <ButtonWrapper>
            <PrimaryButton
              title="Submit"
              onPress={() => onSubmit({ ...note, ...this.state})}
              width={convertWidthPercentToVirtualPoints(30)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <SecondaryButton
              title="Close"
              onPress={onClose}
              width={convertWidthPercentToVirtualPoints(30)}
            />
          </ButtonWrapper>
        </ButtonSection>
      </Wrapper>
    );
  }
}
