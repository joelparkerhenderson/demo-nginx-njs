function demo_hello(r) {
    r.return(200, "Hello world!")
}

function demo_redirect(r) {
    // Send the entire response with the specified status to the client 
    r.return(302, "https://example.com")
}

function demo_log(r) {
    // Write a `string` to the error log on the `info` level of logging.
    r.log("demo_nginx_njs demo_log")
    r.return(200, "Demo log")
}

function demo_warn(r) {
    // Write a `string` to the error log on the `warn` level of logging.
    r.warn("demo_nginx_njs demo_warn")
    r.return(200, "Demo warn")
}

function demo_error(r) {
    // Write a `string` to the error log on the `error` level of logging.
    r.error("demo_nginx_njs demo_error")
    r.return(200, "Demo error")
}

function demo_variables(r) {
    // Write the request variables query string to the error log.
    r.warn("demo_nginx_njs demo_variables query_string:" +  r.variables.query_string)
    r.return(200, "Demo variables query_string:" + r.variables.query_string )
}

export default { demo_hello, demo_redirect, demo_log, demo_warn, demo_error, demo_variables };
