
//����mysql���ݿ�      ---start
var mysql = require('mysql');
var conn = mysql.createConnection({    //createPool �� createConnection ��������������ݿ�����ӣ�ֻ�Ƿ�ʽ��һ����pool�����һ��
    connectionLimit: 10,
    host:"qdm175441403.my3w.com",
    user:"qdm175441403",
    password:"yzb960104",
    database:"qdm175441403_db",
    port:"3306"
});

conn.connect();

//sql�������ݺ���

//���ݱ�����ѯ��������
function findAllByTable(table,callback){
    var findAllByTableSQL = 'select * from ' + table;
    conn.query(findAllByTableSQL , function(err , rows) {
       if(err) {
           throw err;
       }else {
           return callback(rows);
       }
    })
}

//���� ����������id ��ѯ����
function findOneById(table , id , callback) {
    var findOneByIdSQL = 'select * from ' + table + ' where _id = ' +id;
    conn.query(findOneByIdSQL , function (err , rows ) {
        if(err) {
            throw err;
        }else {
            return callback(rows);
        }
    })
}

//���� ����������id ��������
function uptOneById(table , id , resData , callback) {
    var  uptOneByIdSQL = 'update ' + table + ' set resData where _id = ' + id;
    conn.query(uptOneByIdSQL , function (err , rows) {
        if(err) {
            throw err;
        }else {
            return callback(rows);
        }
    })
}



//mysql  sql���

//��ѯ��������
var selectAllSQL = 'select * from test_movie';

//����_id��ѯ����
var selectOneByIdSQL = 'select * from ?? where _id = ?';

//�������
var addMovieSQL = 'insert into test_movie(doctor,country,title,year,poster,language,flash,summary) values(?,?,?,?,?,?,?,?)';
var addMovieSQL_params = [];
//����_id�޸�����
var updateOneByIdSQL = 'update ?? set';

//����_idɾ������
var delOneByIdSQL = 'delete from ?? where _id = ?';

var insertSQL = '';