import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { stub } from 'sinon';
import axios from 'axios';

import * as actions from './actions';
import { fetch, add, remove } from './index';

const initialState = {};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('SKILLS / FETCH', () => {
  const axiosGetStub = stub(axios, 'get');
  const API_UR = 'http://localhost:3000/skills';

  beforeEach(() => {
    store.clearActions();
    axiosGetStub.reset();
  });

  it('should dispatch the fetchRequest action', () => {
    return store.dispatch(fetch()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).to.eql(actions.fetchRequest());
    });
  });

  it('should dispatch fetchSuccess and pass the correct params after make the API call', () => {
    const data = [{ id: 1, name: 'test' }];
    axiosGetStub.returns({ data });

    return store.dispatch(fetch()).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosGetStub.calledOnce).to.be.true;
      expect(axiosGetStub.calledWithExactly(API_UR)).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.fetchSuccess({ data }));
    });
  });

  it('should dispatch fetchFailure and pass the correct params', () => {
    const error = new Error('hey something went wrong!');
    axiosGetStub.rejects(error);
    return store.dispatch(fetch()).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosGetStub.calledOnce).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.fetchFailure({ error }));
    });
  });
});

describe('SKILLS / ADD', () => {
  const axiosPostStub = stub(axios, 'post');
  const API_URL = 'http://localhost:3000/skills';
  const data = { id: 123 };

  beforeEach(() => {
    store.clearActions();
    axiosPostStub.reset();
  });

  it('should dispatch the addRequest action', () => {
    return store.dispatch(add(data)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).to.eql(actions.addRequest());
    });
  });

  it('should dispatch addSuccess and pass the correct params after make the API call', () => {
    const data = [{ id: 1, name: 'test' }];
    axiosPostStub.returns({ data });

    return store.dispatch(add(data)).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosPostStub.calledOnce).to.be.true;
      expect(axiosPostStub.calledWithExactly(API_URL, data)).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.addSuccess({ data }));
    });
  });

  it('should dispatch addFailure and pass the correct params', () => {
    const error = new Error('hey something went wrong!');
    axiosPostStub.rejects(error);
    return store.dispatch(add(data)).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosPostStub.calledOnce).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.addFailure({ error }));
    });
  });
});

describe('SKILLS / REMOVE', () => {
  const axiosDeleteStub = stub(axios, 'delete');
  const API_URL = 'http://localhost:3000/skills';
  const id = 123;

  beforeEach(() => {
    store.clearActions();
    axiosDeleteStub.reset();
  });

  it('should dispatch the removeRequest action', () => {
    return store.dispatch(remove(id)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).to.eql(actions.removeRequest());
    });
  });

  it('should dispatch removeSuccess and pass the correct params after make the API call', () => {
    const data = [{ id: 1, name: 'test' }];
    axiosDeleteStub.returns({ data });

    return store.dispatch(remove(id)).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosDeleteStub.calledOnce).to.be.true;
      expect(axiosDeleteStub.calledWithExactly(`${API_URL}/${id}`)).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.removeSuccess({ id }));
    });
  });

  it('should dispatch removeFailure and pass the correct params', () => {
    const error = new Error('hey something went wrong!');
    axiosDeleteStub.rejects(error);
    return store.dispatch(remove(id)).then(() => {
      const actionsCalled = store.getActions();
      expect(axiosDeleteStub.calledOnce).to.be.true;
      expect(actionsCalled[1]).to.eql(actions.removeFailure({ id, error }));
    });
  });
});
