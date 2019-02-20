import R from 'ramda';

export const pipeP = R.pipeWith((func, res) => Promise.resolve(res).then(it => func(it)));
