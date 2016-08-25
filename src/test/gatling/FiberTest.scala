import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FiberTest extends Simulation {

  val httpConf = http.baseURL("http://localhost:8081")

  val scn = scenario("Test Fibers").repeat(15){
    exec(http("test")
      .get("/hello")).pause(1)
  }


  setUp(scn.inject(atOnceUsers(1500)).protocols(httpConf))
}
