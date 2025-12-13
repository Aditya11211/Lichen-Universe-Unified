use fc496::FC496Cell;

fn main() {
    let payload = b"example data";
    let latitude = 48.8566;
    let longitude = 2.3522;
    let timestamp = 0.0;

    let cell = FC496Cell::new(payload, latitude, longitude, timestamp);

    if cell.is_structurally_valid() {
        println!("FC-496 cell created and validated.");
    } else {
        println!("Cell failed structural validation.");
    }
}
