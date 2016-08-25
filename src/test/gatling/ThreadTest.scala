import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ThreadTest extends Simulation {

  val httpConf = http.baseURL("http://localhost:8081")

  val scn = scenario("Test Threads").repeat(15){
    exec(http("test1")
      .get("/hello1")).pause(1)
  }


  setUp(scn.inject(atOnceUsers(1500)).protocols(httpConf))
}
