import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {
    // Set up some dummy data




    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
         expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
 describe('newGame', () => {
        it('Should add new game', () => {
            let state;
            state = reducer(state, newGame());
            
             expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
        });
    });
  describe('toggleInfoModal False to True', () => {
        it('Should add new game', () => {
            let state ={
               showInfoModal:false
            };
            
            state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(true);
        });
    });
  describe('toggleInfoModal True to False', () => {
        it('Should add new game', () => {
            let state ={
               showInfoModal:true
            };
            
            state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(false);
        });
    });



    describe('makeGuess', () => {
        it('Should make guess', () => {
            let state ={
               guesses: [],
               feedback: 'Make your guess!',
               correctAnswer:45,
               showInfoModal: false
            };
            let guess=10;
            state = reducer(state, makeGuess(guess));
             expect(state.guesses).toEqual([10]);
             expect(state.feedback).toEqual('You\'re Cold...');
             guess=44;
            state = reducer(state, makeGuess(guess));
             expect(state.guesses).toEqual([10,44]);
             expect(state.feedback).toEqual('You\'re Hot!');
       
        });
    });
});
