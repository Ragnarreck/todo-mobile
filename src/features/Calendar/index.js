import React from 'react';
import R from 'ramda';
import moment from 'moment';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, Modal, TouchableOpacity } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Calendar as ReactNativeCalendar } from 'react-native-calendars';
import {
  logout,
  editNote,
  createNote,
  removeNote,
  getAllNotes,
  getNotesByDate,
} from './utils/index';
import { Note } from '../Note/index';
import {
  Header,
  Divider,
  AddButton,
  ActionButton,
  ButtonSection,
  StyledWrapper,
  CalendarTheme,
  StyledListItem,
  StyledListItemText,
  CalendarGlobalStyles,
  StyledFlatListWrapper,
} from './styles';

export class Calendar extends React.Component {
  state = {
    notes: [],
    markedDates: [],
    showNote: false,
    isEditMode: false,
    note: { title: '', description: '' },
    currentDate: moment().format('YYYY-MM-DD'),
  };

  componentDidMount() {
    getNotesByDate(moment().format('DD-MM-YYYY'))
      .then(({ data }) => this.setState(state => ({ ...state, notes: [...state.notes, ...data] })))
      .catch(this.errorCallback);
    this.getMarkedDates();
  }

  errorCallback = err => this.dropdown.alertWithType('error', 'Error', R.path(['response', 'data', 'error'], err));

  onDayPress = date => getNotesByDate(moment(date.dateString).format('DD-MM-YYYY'))
    .then(({ data }) => this.setState(state => ({ ...state, notes: data, currentDate: date.dateString })))
    .catch(err => console.log(err));

  showEditModal = note => this.setState(state => ({
    ...state,
    note,
    showNote: true,
    isEditMode: true,
  }));

  showAddNewModal = () => this.setState(state => ({
    ...state,
    showNote: true,
    isEditMode: false
  }));

  closeModal = () => this.setState(state => ({ ...state, showNote: false, note: { title: '', description: '' } }));

  addNote = (note) => createNote({ ...note, date: this.state.currentDate })
    .then(({ data }) => this.setState(state => ({
      ...state,
      showNote: false,
      isEditMode: false,
      notes: [...state.notes, data],
      markedDates: [...state.markedDates, this.transformDate(data.date)]
    })))
    .catch(this.errorCallback);

  editNote = (note) => editNote(note)
    .then(({ data }) => this.setState(state => ({
      ...state,
      showNote: false,
      isEditMode: false,
      notes: state.notes.map(item => item._id === note._id ? data : item),
    })))
    .catch(this.errorCallback);

  removeNote = (note) => removeNote(note)
    .then(() => {
      const isNoteWithSameDateExists = this.state.notes
                                           .filter(item => item._id !== note._id)
                                           .find(item => item.date === note.date);
      return isNoteWithSameDateExists
        ? this.setState(state => ({ ...state, notes: state.notes.filter(item => item._id !== note._id) }))
        : this.setState(state => ({
          ...state,
          notes: state.notes.filter(item => item._id !== note._id),
          markedDates: state.markedDates.filter(item => item !== this.transformDate(note.date))
        }));
    })
    .catch(this.errorCallback);

  transformDate = date => R.pipe(
    R.split('-'),
    R.reverse,
    R.join('-')
  )(date);

  getMarkedDates = () => getAllNotes()
    .then(({ data }) => R.pipe(
      temp => temp || [],
      R.map(({ date }) => this.transformDate(date)),
      dates => this.setState(state => ({ ...state, markedDates: dates }))
    )(data))
    .catch(this.errorCallback);

  keyExtractor = item => item._id;

  render() {
    const markedDates = R.reduce((acc, date) => date
      ? ({ ...acc, [date]: { marked: true, dotColor: 'orange' } })
      : acc,
      {}
    )(this.state.markedDates);

    return (
      <StyledWrapper>
        <Header>
          <TouchableOpacity onPress={logout}>
            <SimpleLineIcon name="logout" color="#a0100f" size={30} />
          </TouchableOpacity>
        </Header>
        <ReactNativeCalendar
          firstDay={1}
          theme={CalendarTheme}
          onDayPress={this.onDayPress}
          style={CalendarGlobalStyles}
          current={this.state.currentDate}
          markedDates={{
            ...markedDates,
            [this.state.currentDate]: { selected: true, disableTouchEvent: true }
          }}
        />

        <Divider />

        <StyledFlatListWrapper>
          <FlatList
            data={this.state.notes}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <StyledListItem>
                <StyledListItemText numberOfLines={2}>
                  {item.title}
                </StyledListItemText>
                <ButtonSection>
                  <ActionButton onPress={() => this.showEditModal(item)}>
                    <Icon name="eye" color="#a0100f" size={25} />
                  </ActionButton>
                  <ActionButton onPress={() => this.removeNote(item)}>
                    <Icon name="trash" color="#a0100f" size={25} />
                  </ActionButton>
                </ButtonSection>
              </StyledListItem>
            )}
          />
        </StyledFlatListWrapper>

        <AddButton onPress={this.showAddNewModal}>
          <Icon name="plus" color="white" size={30} />
        </AddButton>

        <Modal
          visible={this.state.showNote}
          onRequestClose={this.closeModal}
        >
          <Note
            note={this.state.note}
            onClose={this.closeModal}
            onSubmit={this.state.isEditMode ? this.editNote : this.addNote}
          />
        </Modal>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </StyledWrapper>
    );
  }
};
