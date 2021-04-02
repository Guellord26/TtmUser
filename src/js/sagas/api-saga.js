import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
    yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getListeRouting);
        yield put({ type: "DATA_LOADED", payload });
    } catch (e) {
        yield put({ type: "API_ERRORED", payload: e });
    }
}

function getListeRouting() {
    return fetch("https://ttm.jungostudy.com/gtrans/routing").then(
        response =>
            response.json()
                //  console.log(response)
    );
}