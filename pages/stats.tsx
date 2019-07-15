import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import get from 'lodash/get';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import dynamicReducerWrap from '../src/utils/redux/dynamicReducerWrap';
import { Store } from '../src/redux/store';
import stats, { initialState } from '../src/redux/reducers/stats';
import { addNumber, minusNumber } from '../src/redux/actions/actions';

export interface State {
  stats: typeof initialState;
}

const mapStateToProps = (state: State | {}) => ({
  numstats: get(state, 'stats.stats', 0),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add8: () => dispatch(addNumber(8)),
  minus5: () => dispatch(minusNumber(5)),
});

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

export const Page: FC<Props> = ({ numstats, minus5, add8 }) => {
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint testing"
        themeColor="red"
        hrefPage="/stats"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
      />
      <span>This is stats</span>
      <div>{`Number is ${numstats}`}</div>
      <button type="button" onClick={add8}>
        add 8
      </button>
      <button type="button" onClick={minus5}>
        minus 5
      </button>
      <Link href="/" prefetch={false}>
        <a>index</a>
      </Link>
    </main>
  );
};

const ConnectedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default dynamicReducerWrap<Store>({ reducers: { stats }, Child: ConnectedPage });
