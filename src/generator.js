export default Blockly => {
    Blockly.Python['microbit_pin_setDigitalOutput'] = function (block) {
        var pin = block.getFieldValue('PIN');
        var level = Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_FUNCTION_CALL) || 'LOW';
        return 'pin' + pin + '.write_digital(' + level + ')\n';
    };

    Blockly.Python['microbit_pin_menu_level'] = function (block) {
        var code = block.getFieldValue('level') || '0';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_pin_setPwmOutput'] = function (block) {
        var pin = block.getFieldValue('PIN');
        var out = Blockly.Python.valueToCode(block, 'OUT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
        return 'pin' + pin + '.write_analog(' + out + ')\n';
    };

    Blockly.Python['microbit_pin_readDigitalPin'] = function (block) {
        var pin = block.getFieldValue('PIN') || '0';
        return ['pin' + pin + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_pin_readAnalogPin'] = function (block) {
        var pin = block.getFieldValue('PIN') || '0';
        return ['pin' + pin + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_pin_pinTouched'] = function (block) {
        var pin = block.getFieldValue('PIN') || '0';
        return ['pin' + pin + '.is_touched()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_display_showImage'] = function (block) {
        var arg0 = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';

        arg0 = arg0.replace(/1/g, '9');
        arg0 = arg0.slice(0, 5) + ':' + arg0.slice(5, 10) + ':' + arg0.slice(10, 15) +
            ':' + arg0.slice(15, 20) + ':' + arg0.slice(20, 25);
        return "display.show(Image('" + arg0 + "'))\n";
    };

    Blockly.Python['microbit_display_showImageUntil'] = function (block) {
        var arg0 = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';
        var arg1 = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC) || '0';

        arg0 = arg0.replace(/1/g, '9');
        arg0 = arg0.slice(0, 5) + ':' + arg0.slice(5, 10) + ':' + arg0.slice(10, 15) +
            ':' + arg0.slice(15, 20) + ':' + arg0.slice(20, 25);
        return "display.show(Image('" + arg0 + "'))\n" +
            'sleep(float(' + arg1 + ') * 1000)\n' +
            'display.clear()\n';
    };

    Blockly.Python['microbit_display_show'] = function (block) {
        var arg0 = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        return 'display.scroll(str(' + arg0 + '), wait=False, loop=False)\n';
    };

    Blockly.Python['microbit_display_showUntilScrollDone'] = function (block) {
        var arg0 = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        return 'display.scroll(str(' + arg0 + '), wait=True, loop=False)\n';
    };

    Blockly.Python['microbit_display_clearDisplay'] = function () {
        return 'display.clear()\n';
    };

    Blockly.Python['microbit_display_lightPixelAt'] = function (block) {
        var sta = block.getFieldValue('STATE');
        var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';

        if (sta === 'off') {
            sta = 0;
        } else {
            sta = 9;
        }
        return 'display.set_pixel(int(' + x + '), int(' + y + '), ' + sta + ')\n';
    };

    Blockly.Python['microbit_display_showOnPiexlbrightness'] = function (block) {
        var brt = Blockly.Python.valueToCode(block, 'BRT', Blockly.Python.ORDER_FUNCTION_CALL) || '9';
        var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        return 'display.set_pixel(int(' + x + '), int(' + y + '), ' + brt + ')\n';
    };

    Blockly.Python['microbit_display_menu_ledBrightness'] = function (block) {
        var code = block.getFieldValue('ledBrightness') || '9';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_buttonIsPressed'] = function (block) {
        var key = block.getFieldValue('KEY');
        return ['button_' + key + '.is_pressed()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_gestureIsX'] = function (block) {
        var sta = block.getFieldValue('STA');
        return ["accelerometer.is_gesture('" + sta + "')", Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_axisAcceleration'] = function (block) {
        var axis = block.getFieldValue('AXIS');
        return ['accelerometer.get_' + axis + '()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_compassAngle'] = function () {
        return ['compass.heading()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_compassMagneticDensity'] = function () {
        return ['compass.get_field_strength()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_calibrateCompass'] = function () {
        return ['compass.calibrate()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_lightLevel'] = function () {
        return ['display.read_light_level()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_temperature'] = function () {
        return ['temperature()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_sensor_runningTime'] = function () {
        return ['running_time()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_wireless_openWirelessCommunication'] = function () {
        Blockly.Python.imports_['radio'] = 'import radio';
        return 'radio.on()\n';
    };

    Blockly.Python['microbit_wireless_closeWirelessCommunication'] = function () {
        Blockly.Python.imports_['radio'] = 'import radio';
        return 'radio.off()\n';
    };

    Blockly.Python['microbit_wireless_resetWirelessCommunication'] = function () {
        Blockly.Python.imports_['radio'] = 'import radio';
        return 'radio.reset()\n';
    };

    Blockly.Python['microbit_wireless_sendWirelessMessage'] = function (block) {
        Blockly.Python.imports_['radio'] = 'import radio';
        var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        return 'radio.send(str(' + msg + '))\n';
    };

    Blockly.Python['microbit_wireless_receiveWirelessMessage'] = function () {
        Blockly.Python.imports_['radio'] = 'import radio';
        return ['radio.receive()', Blockly.Python.ORDER_ATOMIC];
    };

    Blockly.Python['microbit_wireless_setWirelessCommunicationChannel'] = function (block) {
        Blockly.Python.imports_['radio'] = 'import radio';
        var ch = block.getFieldValue('CH');
        return 'radio.config(channel = ' + ch + ')\n';
    };

    Blockly.Python['microbit_console_consolePrint'] = function (block) {
        var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
        return 'print(' + msg + ')\n';
    };

    return Blockly;
};
