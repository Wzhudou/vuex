const express = require('express');
const router = express.Router();
const Mock = require('mockjs');

// 引入测试用户
const user = require('./user.json');

router.post('/login', (req, res) => {
    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'wgj' && password === '123456') {
        res.send({
            code: 200,
            msg: '登录成功',
            user: username,
            token: 'test122222'
        })
    } else {
        res.send({
            code: 401,
            msg: '登录失败',
        })
    }

});

router.get('/list', (req, res) => {
    // 是否存在token
    const token = req.headers.authorization;
    console.log('11111', token);
    if (token === 'test122222') {
        res.send({
            msg: '请求成功',
            code: 200,
            data: Mock.mock({
                'list|1-10': [{
                    'id|+1': 1,
                }]
            })
        })
    } else {
        res.send({
            msg: 'token验证失败',
            code: 401,
        })
    }
})
router.get('/line', (req, res) => {
    res.send({
        msg: '请求成功',
        code: 200,
        data: Mock.mock({
            'data|5': ["@integer(100, 10000)"],
            'name|5': ["@string"],
        })
    })
})
module.exports = router;