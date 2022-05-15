import { createSlice, createEntityAdapter, createAsyncThunk,isRejectedWithValue } from '@reduxjs/toolkit';
/*
 *   @param {string}  moreSelection
 */

export function templateSliceCreater(moreSelection) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof moreSelection !== 'string') throw new Error('moreSelection is not a string');
      if (!moreSelection) throw new Error('moreSelection is not defined');

      resolve({
        templateAdapter: createEntityAdapter({
          selectId: (temp) => temp.id,
          sortComparer: (preTemp, nextTemp) => preTemp.id.localeCompare(nextTemp.id),
        }),
        getData: createAsyncThunk(`${moreSelection}/getData`, async (id = '') => {
          try {
            const data = await fetch(`/api/${id}`);
            return await data.json();
          } catch (err) {
            console.log(err);
          }
        }),
        postData: createAsyncThunk(`${moreSelection}/postData`, async (params) => {
          try {
            const data = await fetch(`/api`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(params),
            });
            return await data.json();
          } catch (err) {
            console.log(err);
          }
        }),
        putData: createAsyncThunk(`${moreSelection}/putData`, async (params) => {
          try {
            const data = await fetch(`/api`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(params),
            });
            return await data.json();
          } catch (err) {
            console.log(err);
          }
        }),
        deleteData: createAsyncThunk(`${moreSelection}/deleteData`, async (id) => {
          try {
            const data = await fetch(`/api/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            return await data.json();
          } catch (err) {
            console.log(err);
          }
        }),
        // !slice begins here
        templateSlice: createSlice({
          initialState: this.templateAdapter.getInitialState({
            status: 'idle',
            naming: moreSelection,
            error: null,
            data: null,
          }),
          reducers: {
            setOneSelection: (state, action) => {
              this.templateAdapter.addOne(state, action.payload);
            },
            setMoreSelection: (state, action) => {
              this.templateAdapter.setAll(state, action.payload);
            },
            setStatus: (state, action) => {
              state.status = action.payload;
            },
            setError: (state, action) => {
              state.error = action.payload;
              state.status = 'error';
            },
            reset: (state, action) => {
              state.status = 'idle';
              state.error = null;
            },
          },
          extraReducers: {
            //!first fulfilled operations
            [this.getData.fulfilled]: (state, action) => {
              state.moreSelection = this.templateAdapter.addMany(
                state.moreSelection,
                action.payload
              );
            },
            [this.postData.fulfilled]: (state, action) => {
              state.moreSelection = this.templateAdapter.addOne(
                state.moreSelection,
                action.payload
              );
            },
            [this.putData.fulfilled]: (state, action) => {
              state.moreSelection = this.templateAdapter.updateOne(
                state.moreSelection,
                action.payload
              );
            },
            [this.deleteData.fulfilled]: (state, action) => {
              state.moreSelection = this.templateAdapter.removeOne(
                state.moreSelection,
                action.payload.id
              );
            },
            //!second pending operations
            [this.getData.pending]: (state, action) => {
              state.status = 'pending';
            },
            [this.postData.pending]: (state, action) => {
              state.status = 'pending';
            },
            [this.putData.pending]: (state, action) => {
              state.status = 'pending';
            },
            [this.deleteData.pending]: (state, action) => {
              state.status = 'pending';
            },
            //!third rejected operations
            [this.getData.rejected]: (state, action) => {
              state.status = 'rejected';
              state.error = action.error;
            },
            [this.postData.rejected]: (state, action) => {
              state.status = 'rejected';
              state.error = action.error;
            },
            [this.putData.rejected]: (state, action) => {
              state.status = 'rejected';
              state.error = action.error;
            },
            [this.deleteData.rejected]: (state, action) => {
              state.status = 'rejected';
              state.error = action.error;
            },
          },
        }).reducer,
        allSelectors: this.templateAdapter.getSelectors((state) => state.templateSlice),
        allActions: {
          getData: this.getData,
          postData: this.postData,
          putData: this.putData,
          deleteData: this.deleteData,
        },
      });
    } catch (err) {
      reject(err);
    }
  });
}
