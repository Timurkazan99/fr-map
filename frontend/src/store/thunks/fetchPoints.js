import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchPoints} from '../../http/pointsApi';

const thunkFetchPoints = createAsyncThunk(
  'fetch/points',
  async () => fetchPoints(),
);

export default thunkFetchPoints;