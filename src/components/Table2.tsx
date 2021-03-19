import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Types from '../types/main';

interface Props {
  data: Array<Types.table>;
}

const Table2: React.FC<Props> = (props: Props) => {
  const columns = [
    { field: 'id', headerName: '順位', width: 200 },
    { field: 'device_id', headerName: 'デバイスID', width: 300 },
    { field: 'date', headerName: '最終更新された日付', width: 300 },
    { field: 'points', headerName: '累計得点', width: 500 },
  ];

  const rows = props.data;

  return (
    <div
      style={{
        height: 500,
        width: '1300px',
        margin: '30px auto 0',
      }}
    >
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default Table2;
