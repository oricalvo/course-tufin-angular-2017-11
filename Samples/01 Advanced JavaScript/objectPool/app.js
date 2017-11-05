var common = (function() {
    var MAGIC_FIELD = "####myblabla####";
    var nextId = 1000;

    function ObjectPool() {
        var map = {};

        function add(obj) {
            var id = obj[MAGIC_FIELD];
            if(!id) {
                id = obj[MAGIC_FIELD] = ++nextId;
            }

            map[id] = obj;
        }

        function take() {
            for(var id in map) {
                var obj = map[id];

                delete map[id];

                return obj;
            }

            return null;
        }

        function contains(obj) {
            var id = obj[MAGIC_FIELD];
            if(!id) {
                return false;
            }

            return map.hasOwnProperty(id);

        }

        return {
            add: add,
            take: take,
            contains: contains,
        }
    }

    return {
        ObjectPool: ObjectPool,
    };
})();